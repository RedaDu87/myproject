// src/app/invocations/invocation.model.ts
export interface InvocationCategory {
    title: string;
    invocations: Invocation[];
  }
  
  export interface Invocation {
    invocation_arabe: string;
    invocation_transliteration: string;
    invocation_francais: string;
    raison: string;
  }