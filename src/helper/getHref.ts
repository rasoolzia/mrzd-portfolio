const host = import.meta.env.VITE_PUBLIC_DOMAIN ?? 'mrzd.ir';

const getBaseInfo = () => {
   if (typeof window === 'undefined') {
      return {
         protocol: 'http',
         host,
      };
   }

   const protocol = window.location.protocol;
   const currentHost = window.location.hostname;

   if (currentHost === 'localhost' || currentHost === '127.0.0.1') {
      return {
         protocol,
         host,
      };
   }

   return {
      protocol,
      host: currentHost.replace(/^(www\.)?/, ''),
   };
};

export const getHref = (subdomain: string, path: string = '') => {
   const { protocol, host } = getBaseInfo();

   const url = `${protocol}//${subdomain}.${host}`;
   return path ? `${url}/${path}` : url;
};
