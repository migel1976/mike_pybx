import {useState,useCallback} from 'react';

export const useHttp=()=>{
	const [error,setError]=useState(null);

	const request=useCallback(async(url,method='GET',body=null,headers={})=>{
		try{
			if(body){
				body=JSON.stringify(body);
				headers['Content-type']='application/json';
			}
			const response=await fetch(url,{method,body,headers});			  const data=await response.json();
			if(!response.ok){
				throw new Error(data.message||'something wrong');
			}
			return data;
		}
		catch(e){
			console.log('Catch',e.message);
			setError(e.message);
			throw e;
		}
	},[]);
	const clearError=useCallback(()=>setError(null),[]);
	return {request,error,clearError};
};

