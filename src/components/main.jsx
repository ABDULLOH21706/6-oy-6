import { useState } from "react";
import "../components_style/main.css";

function main_func() {
  return (
    <main className="flex items-start justify-between pl-[300px] pr-[300px] w-[100%]">
      <div className="flex flex-col items-start justify-center gap-[50px] w-[500px]">
        <div className="flex flex-col items-start justify-center gap-[25px] w-[100%]">
          <p className="text-[20px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
            Turkumlar
          </p>
          <div className="flex flex-col items-start justify-center gap-[10px] pl-[15px]">
            <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
              Bracha turkumlar
            </p>
            <div className="pl-[12px]">
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Elektronika
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Elektronika uchun aksessuarlar
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Kvadratrokopterlar va aksessuarlar
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Kompyuter texnikasi
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Navigatorlar
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Quloqchinlar va audio texnikalar
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Noutbooklar, Planshetlar va elektron kitoblar
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Optik anjomlar
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Ofis texnikasi
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Smartfonlar va telefonlar
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Televizorlar va videotexnikalar
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Geymerlar uchun mahsulotlar
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Aqlli soatlar va fitnes bilaguzuklar
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Aqlli uy va xavfsizlik
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Foto va video texnika
              </p>
              <p className="text-[15px] font-[400] pl-[10px] pr-[10px] rounded-[5px] hover:bg-[#D6D9DE] cursor-pointer">
                Soatlar va elektron budilniklar
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-[30px]">
        <div className="flex flex-col items-start justify-center w-[100%]">
          <p className="text-[25px] font-[700]">Elektronika</p>
          <p className="text-[16px] font-[400]">64 796 ta tovar </p>
          <div className="flex items-center justify-center gap-[10px] mt-[15px]">
            <button className="p-[4px] pl-[10px] pr-[10px] bg-[#F0F2F5] hover:bg-[#D0D3D9] rounded-[5px]">
              Aksessuarlar va ehtiyot qismlar
            </button>
            <button className="p-[4px] pl-[10px] pr-[10px] bg-[#F0F2F5] hover:bg-[#D0D3D9] rounded-[5px]">
              Qoplamalar
            </button>
            <button className="p-[4px] pl-[10px] pr-[10px] bg-[#F0F2F5] hover:bg-[#D0D3D9] rounded-[5px]">
              Quloqchinlar
            </button>
            <button className="p-[4px] pl-[10px] pr-[10px] bg-[#F0F2F5] hover:bg-[#D0D3D9] rounded-[5px]">
              Simsiz quloqchinlar
            </button>
            <button className="p-[4px] pl-[10px] pr-[10px] bg-[#F0F2F5] hover:bg-[#D0D3D9] rounded-[5px]">
              Smartfonlar
            </button>
            <button className="p-[4px] pl-[10px] pr-[10px] bg-[#F0F2F5] hover:bg-[#D0D3D9] rounded-[5px]">
              Kompyuter aksessuarlar
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[100%] gap-[15px]">
          <div className="w-[100%]">
            <select className="text-[16px] outline-none">
              <option value="1">Avval ko'rsatiladi Ommabop</option>
              <option value="2">Ommabop</option>
              <option value="3">Arzonroq</option>
              <option value="4">Qimmatroq</option>
              <option value="5">Reytingi yuqori</option>
              <option value="6">Ko'p buyurtirilgan</option>
              <option value="7">Yaqinda qo'shilgan</option>
            </select>
          </div>
          <div className="flex items-center justify-center w-[100%] p-[15px] rounded-[20px] border-[2px] border-[#D7D7D9]">
            <div className="flex items-center justify-start w-[100%] gap-[20px]">
              <div className="w-[60px]">
                <img
                  src="data:image/svg+xml,%3csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C30.9423 42 36.9693 38.0702 39.9732 32.3067C40.3561 31.5721 41.262 31.2869 41.9966 31.6698C42.7313 32.0527 43.0164 32.9586 42.6335 33.6933C39.1333 40.4092 32.104 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C32.104 3 39.1333 7.59084 42.6335 14.3067C43.0164 15.0414 42.7313 15.9473 41.9966 16.3302C41.262 16.7131 40.3561 16.4279 39.9732 15.6933C36.9693 9.92982 30.9423 6 24 6ZM40.5 22.5V19.5H43.5V22.5H46.5V25.5H43.5V28.5H40.5V25.5H37.5V22.5H40.5ZM24.75 28.5C24.75 26.8431 26.0931 25.5 27.75 25.5C29.4069 25.5 30.75 26.8431 30.75 28.5C30.75 30.1569 29.4069 31.5 27.75 31.5C26.0931 31.5 24.75 30.1569 24.75 28.5ZM33 20.25C33 21.6501 32.4519 22.9223 31.5586 23.8635C32.8966 24.9639 33.75 26.6323 33.75 28.5C33.75 31.8137 31.0637 34.5 27.75 34.5C24.4363 34.5 21.75 31.8137 21.75 28.5C21.75 26.6323 22.6034 24.9639 23.9414 23.8635C23.0481 22.9223 22.5 21.6501 22.5 20.25C22.5 17.3505 24.8505 15 27.75 15C30.6495 15 33 17.3505 33 20.25ZM25.5 20.25C25.5 21.4926 26.5074 22.5 27.75 22.5C28.9926 22.5 30 21.4926 30 20.25C30 19.0074 28.9926 18 27.75 18C26.5074 18 25.5 19.0074 25.5 20.25ZM17.2283 15.2138L13.5 17.4507V20.9493L16.5 19.1493V34.5H19.5V16.5V15H17.5845L17.2283 15.2138Z' fill='%237000FF'/%3e %3c/svg%3e"
                  alt=""
                  draggable="false"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-[5px]">
                <div className="flex flex-col items-center justify-center gap-[10px] w-[390px]">
                  <p className="text-[15px] font-[400]">
                    Qidiruv natijalarida "kattalar uchun" mahsulotlar mavjud
                    Ularni koʻrsata olamiz: 18 yoshdan kattamisiz?
                  </p>
                  <div className="flex items-center justify-start gap-[10px] w-[100%]">
                    <button className="rounded-[10px] p-[6px] pl-[15px] pr-[15px] text-[15px] font-[500] border-[2px] border-[#D7D7D9]">Yo'q</button>
                    <button className="rounded-[10px] p-[8px] pl-[15px] pr-[15px] text-white text-[15px] font-[500] bg-[#7000FF] hover:bg-[#7F4DFF]">Ha, men 18 yoshman</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default main_func;
