import { useEffect, useState } from 'react';
import type { ApiErrorType } from '../const/ErrorApiType';

export const useApi = <T>(url: string) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<ApiErrorType>({
		error: false,
		status: null,
		statusText: '',
	});

	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();
		const signal = controller.signal;

		const getData = async () => {
			try {
				const res = await fetch(url, { signal });
				if (!res.ok) {
					setError({
						error: true,
						status: res.status ?? 500,
						statusText: res.statusText || 'Ocurrio un problema',
					});
					return;
				}
				const data: T = await res.json();
				setData(data);
				setError({
					error: false,
					status: res.status,
					statusText: res.statusText || 'Petición exitosa',
				});
			} catch (error) {
				if ((error as DOMException).name === 'AbortError') {
					console.warn('Petición cancelada');
					return;
				}
				if (error && typeof error === 'object' && 'status' in error && 'statusText' in error) {
					const err = error as ApiErrorType;
					setError({
						error: true,
						status: err.status ?? 500,
						statusText: err.statusText || 'Ocurrio un problema',
					});
				} else {
					setError({
						error: true,
						status: 503,
						statusText: 'Error desconocido :(',
					});
				}
			} finally {
				setLoading(false);
			}
		};
		getData();
		return () => {
			controller.abort();
		};
	}, [url]);

	return {
		data,
		loading,
		error,
	};
};
