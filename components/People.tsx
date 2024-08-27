import co1 from "../public/people/co/sanjib.jpeg";
import co2 from "../public/people/co/mousumi.jpeg";
import co3 from "../public/people/co/debosmita_das copy.jpeg";
import co4 from "../public/people/co/arnab_saha.jpeg";

import media from "../public/people/media/arpan.jpeg";

import head1 from "../public/people/head/sayan.jpeg";
import head2 from "../public/people/head/anish.jpeg";
import head3 from "../public/people/head/raj.jpeg";
import head4 from "../public/people/head/sehnaz.jpeg";
import head5 from "../public/people/head/neelavra.jpeg";
import head6 from "../public/people/head/avirup.jpeg";
import head7 from "../public/people/head/jeshmita.jpeg";
import head8 from "../public/people/head/tanusshree.jpeg";
import head9 from "../public/people/head/dipan.jpeg";
import head10 from "../public/people/head/devmalya.jpeg";
import head11 from "../public/people/head/khusi.jpeg";
import head12 from "../public/people/head/sunny_shah copy.jpeg";
import head13 from "../public/people/head/priya.jpeg";

import ch1 from "../public/people/Cohead/ujan.jpeg";
import ch2 from "../public/people/Cohead/sahisnu.jpeg";
import ch3 from "../public/people/Cohead/argha_santra copy.jpeg";
import ch4 from "../public/people/Cohead/arnab copy.jpeg";
import ch5 from "../public/people/Cohead/anandi copy.jpeg";
import ch6 from "../public/people/Cohead/supriya.jpeg";
import ch7 from "../public/people/Cohead/sayani.jpeg";

import ch9 from "../public/people/Cohead/kushal_barai.jpeg";
import ch10 from "../public/people/Cohead/hemant.jpeg";
import ch11 from "../public/people/Cohead/deepshika_roy.jpeg";
import ch12 from "../public/people/Cohead/deeba_ali_naz copy.jpeg";


export default function People() {
    return <div className="container mx-auto mt-2 p-4">
            <div className="text-white  text-orange-400 text-xl flex justify-center items-center">Scroll for Suprise....</div>
        //CONVENOR
        <div className="underline underline-offset-8 text-xl md:text-3xl italic md:font-semibold tracking-wide text-slate-800 flex justify-center items-center p-8 mt-7">
                <div className="md:text-5xl text-3xl mt-2 italic font-extrabold text-white">
                    CONVENOR
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer">
                    <div className="text-white flex justify-center items-center">
                        
                    </div>
        </div>

        //co-ordinator

        <div className="underline underline-offset-8 text-xl md:text-2xl md:font-semibold tracking-wide mb-10 italic text-slate-800 flex justify-center items-center p-8 mt-7">
                <div className="md:text-5xl text-3xl mt-4 italic font-extrabold text-white">
                    CO-ORDINATOR
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-4 cursor-pointer flex justify-center items-center ">
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <img src={co1.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Sanjib Ghosh</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <img src={co2.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Mousumi Ghosh</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <img src={co3.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Debosmita Das</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-30 rounded-full">
                        <div className="cursor-pointer">
                            <img src={co4.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Arpan Saha</div>
                        </div>
                    </div>
        </div>            

        //media

        <div className="underline underline-offset-8 text-4xl md:text-5xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center mb-10 p-8 mt-7">
                <div className="md:text-5xl text-3xl mt-4 italic font-extrabold text-white">
                    MEDIA
                </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mt-4 cursor-pointer justify-center items-center">
  <div className="flex flex-col items-center justify-center rounded-full">
    <div className="cursor-pointer">
      <img src={media.src} alt="bgmi" className="border h-44 md:h-52 rounded-full mx-auto"/>
      <div className="text-lg text-white flex justify-center mt-5 font-bold md:text-2xl">Arpan</div>
      <div className="text-white text-lg font-bold md:text-2xl flex justify-center">Bhattacharya</div>
    </div>
  </div>
</div>


        //event head

        <div className="underline underline-offset-8 text-xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center mb-10 p-8 mt-7">
                <div className="md:text-5xl text-3xl mt-4 mb-5 italic font-extrabold text-white">
                    HEAD
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer">
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head1.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Sayan Das </div>
                        
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head2.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Anish Khan </div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-3xl ">
                        <div className="cursor-pointer ">
                            <img src={head3.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Raj Chowdhury</div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head4.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-8 font-bold md:text-2xl">Sehnaz Parvin</div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head5.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Neelavra </div>
                            <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Chakraborty </div>
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head6.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Avitup Ghoshal </div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head7.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Jeshmita</div>
                            <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Chatterjee</div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head8.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Tanushree Kha</div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head9.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Dipan Dutta</div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head10.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Devmalya Ghosh </div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head11.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Khusi Yadav </div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head12.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Sunny Shah</div>
                            
                        </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                        <div className="cursor-pointer ">
                            <img src={head13.src} alt="bgmi" className="border rounded-full"/>
                            <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Priya Anand </div>
                            
                        </div>
            </div>
        </div>

        //event co-head

        <div className="underline underline-offset-8text-xl md:text-3xl md:font-semibold tracking-wide text-slate-800 flex justify-center items-center mb-10 p-8 mt-7">
                <div className="md:text-5xl text-3xl mt-4 italic font-extrabold text-white">
                    CO-HEAD
                </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-4 cursor-pointer">
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch1.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Ujan Ghosh</div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch2.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-7 font-bold md:text-2xl">Sahisnu Das </div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Pattanayak</div>

                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch3.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Argha Santra </div>
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch4.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Arnab Saha</div>
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch5.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Anandi Das </div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch6.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Supriya Mishra</div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch7.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Sayani Pal</div>
                                
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch9.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Kushal Barai</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch10.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-9 font-bold md:text-2xl">Hemant Singh</div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Rajput</div>
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full ">
                            <div className="cursor-pointer ">
                                <img src={ch11.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Deepshika Roy</div>
                        
                            </div>
            </div>
            <div className="flex flex-col items-center justify-center h-30 rounded-full md:flex md:justify-center md:items-center">
                            <div className="cursor-pointer ">
                                <img src={ch12.src} alt="bgmi" className="border rounded-full"/>
                                <div className="text-lg text-white flex justify-center mt-14 font-bold md:text-2xl">Deeba Ali</div>
                                <div className="text-lg text-white flex justify-center font-bold md:text-2xl">Naz</div>
                        
                            </div>
            </div>
        </div>
    </div>

}