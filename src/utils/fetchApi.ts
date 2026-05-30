type FetchOptions = {
   method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
   body?: unknown;
   headers?: Record<string, string>;
   token?: string;
};

const API_TOKEN = import.meta.env.VITE_PUBLIC_API_TOKEN;

export async function fetchApi<T = unknown>(
   url: string,
   options: FetchOptions = {},
): Promise<T> {
   const { method = 'GET', body, headers = {}, token = API_TOKEN } = options;
   const isBodyExist = body !== undefined;

   if (token) {
      headers['Authorization'] = `Bearer ${token}`;
   }

   if (isBodyExist) {
      headers['Content-Type'] = 'application/json';
   }

   const res = await fetch(url, {
      method,
      headers,
      body: isBodyExist ? JSON.stringify(body) : undefined,
   });

   const data = await res.json();

   if (!res.ok || data.success === false) {
      throw new Error(data.error ?? data.message ?? `HTTP ${res.status}`);
   }

   return data as T;
}
