import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import moment from 'moment';
import { TabView, TabPanel } from 'primereact/tabview';

const ResearchStats = (props) => {
   console.log(props.data.market_data.ath_data?.usd, 'zzzz')
   console.log(props.data.market_data.ath_date.usd, 'peckkk')

   const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" }
      let epoch = moment(dateString).unix();
      return new Date(dateString).toLocaleDateString(undefined, options)

   }


   return (
      <>
         <div className='mt-5'>
            <div className="ps-info-box-3 overflow-hidden">
               <TabView>
                  <TabPanel header="Developer Data" className='text-sm font-light border-pink-600'>
                     <div className='flex align-items-center pt-4 pb-4'>
                        <div className='text-center pr-5'>
                           <div className='text-4xl font-bold'>
                              1235845
                           </div>
                           <span className='text-large'>Subscribers <i className="pi pi-star-fill text-500"></i></span>
                        </div>
                        <div className='text-center pr-5'>
                           <div className='text-4xl font-bold'>
                              98570
                           </div>
                           <span className='text-large'>Subscribers <i className="pi pi-users"></i></span>
                        </div>
                        <div className='text-center pr-5'>
                           <div className='text-4xl font-bold'>
                              1235845
                           </div>
                           <span className='text-large'>Subscribers <i className="pi pi-star-fill text-500"></i></span>
                        </div>
                        <div className='text-center pr-5'>
                           <div className='text-4xl font-bold'>
                              98570
                           </div>
                           <span className='text-large'>Subscribers <i className="pi pi-users"></i></span>
                        </div>
                        <div className='text-center pr-5'>
                           <div className='text-4xl font-bold'>
                              1235845
                           </div>
                           <span className='text-large'>Subscribers <i className="pi pi-star-fill text-500"></i></span>
                        </div>
                        <div className='text-center pr-5'>
                           <div className='text-4xl font-bold'>
                              98570
                           </div>
                           <span className='text-large'>Subscribers <i className="pi pi-users"></i></span>
                        </div>

                     </div>
                  </TabPanel>
                  <TabPanel header="Social Media Data">

                     <div className='flex align-items-center pt-4 pb-4'>
                        <div className='flex align-items-center mr-5'>
                           <i className="pi pi-github text-6xl text-900 pr-2"></i>
                           <div>
                              <div className='text-4xl font-bold'>
                                 1235845
                              </div>
                              <span className='text-large'>Subscribers </span>
                           </div>
                        </div>
                        <div className='flex align-items-center mr-5'>
                           <i className="pi pi-twitter text-6xl pr-2" style={{color: '#08a0e9'}}></i>
                           <div>
                              <div className='text-4xl font-bold'>
                                 584585
                              </div>
                              <span className='text-large'>Subscribers </span>
                           </div>
                        </div>

                        <div className='flex align-items-center mr-5'>
                           <i className="pi pi-reddit text-6xl text-orange-500 pr-2"></i>
                           <div>
                              <div className='text-4xl font-bold'>
                                 2505528
                              </div>
                              <span className='text-large'>Subscribers </span>
                           </div>
                        </div>

                        <div className='flex align-items-center mr-5'>
                           <i className="pi pi-facebook text-6xl text-blue-500 pr-2"></i>
                           <div>
                              <div className='text-4xl font-bold'>
                                 2505528
                              </div>
                              <span className='text-large'>Subscribers </span>
                           </div>
                        </div>

                     </div>


                  </TabPanel>
               </TabView>
            </div>
         </div>
         
      </>


   );

}
export default ResearchStats