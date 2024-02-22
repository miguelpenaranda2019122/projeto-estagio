import OpenAccountMethods from "./OpenAccountMethods";

export default function OpenAccountMethodsContainer({title,  ...props} : {title ?: string}) {

    return (

        <div className="container-xl" {...props}>

            <h2 className="text-center p-4 txt-primary-900">Open Account Methods</h2>

            <div className="row">
                <div className="col-lg-6 pt-4">
                    <OpenAccountMethods methodClass="card-method" />
                </div>
                <div className="col-lg-6 pt-4">
                    <OpenAccountMethods methodClass="card-method active" />
                </div>
            </div>

      </div>

    )

}