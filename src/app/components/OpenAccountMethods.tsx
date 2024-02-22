import Watch from "./icones/Watch";
import VideoCall from "./illustrations/VideoCall";

export default function OpenAccountMethods({duration, method, info, img, methodClass,   ...props} : {duration?: number, method?: string, info?: string, img?: React.ReactElement, methodClass?: string}) {

    return (

        <div className={methodClass}>
            <div className="row align-items-lg-center m-0">

              <div className="col-lg-4 d-flex justify-content-center align-items-center pt-3">
                <div className="method-img">
                    {<VideoCall />}
                </div>
              </div>

                <div className="col-lg-8 p-3 d-flex flex-column gap-3">

                    <div className="method-duration text-end py-2 my-2 row flex-row-reverse d-flex align-items-center pe-3"> 
                        <p className={`col-auto px-3 py-2 rounded-5 m-0 ${methodClass === 'card-method active'? ' bg-body txt-primary-900' : 'bgc-secondary-50 txt-secondary-900' } `}> 
                           {<Watch />} 40 min
                        </p>
                        <div className="col col-md-12 text-start order-1">
                            <h5 className="m-0">Video Call</h5>
                        </div>
                    </div>

                    <p className="txt-primary-700">After you insert your personal information and documents you will have a call with one of our operators to validate your identity.</p>
                </div>

            </div>
        </div>
        
    )
}