export async function generateTypes(fileContents: Record<string, any>) {
  //let's first validate the generated contents
  if (!fileContents.paths) {
    throw new Error('No Endpoints found to generate types for.')
  }
  if (!fileContents.components?.schemas) {
    throw new Error('No Components found to generate types for.')
  }
  const endpoints: any = []
  console.log(endpoints);

  for (const key in fileContents.paths) {
    //find method first

    /*
     * interface Endpoint {
    method: string,
    query: Record<string, any>
    params: Record<string, any>
    body: Record<string, any>
  }
     *
     * const endpointInformation: Endpoint = {
      method: '',
      query: {
        name: 'type will be here'
      },
      params: {
        name: 'type will be here'
      },
      body: {
        name: 'type will be here'
      }
    }*/

    //let keep track of methods that have already been pushed
    //const methods = Object.keys(fileContents.paths[key]);
    for (const method of Object.values(fileContents.paths[key])) {
      console.log(method);

      /*
       if (method !== 'parameters') {
         endpointInformation.method = method
         for (const parameter of method) {
           console.log(parameter)
         }
       }
       */
    }
  }
}
