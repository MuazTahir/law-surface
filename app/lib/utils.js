

export async function sendSignUpEmail(args){

    
}

export async function getDataType(req) {

    let dataType = req.headers.get('content-type');

    switch (true) {

        case dataType.includes('json'): {
            let res = await req.json();
            return {
                type: res.action,
                data: res
            }
        }

        case dataType.includes('form'): {
            let res = await req.formData();
            return {
                type: res.get('action'),
                data: res
            }
        }

    }

}