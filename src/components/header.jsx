import { useState } from "react";
import "../components_style/header.css";

function header_func() {
  return (
    <header className="flex flex-col items-center justify-center w-[100%]">
      <div className="flex items-center justify-between bg-[#F0F2F5] w-[100%] pt-[5px] pb-[5px] pl-[400px] pr-[400px]">
        <div className="flex items-center justify-center gap-[25px]">
          <div className="flex items-center justify-center gap-[5px] cursor-pointer">
            <i class="fa-solid fa-location-dot"></i>
            <p className="text-[14px] font-[600]">Ташкент</p>
          </div>
          <p className="text-[14px] font-[400] cursor-pointer">Пункти видачи</p>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          <div className="flex items-center justify-center gap-[10px] text-[14px] font-[400] cursor-pointer">
            <p className="text-[#702AFC]">Стать продавцом</p>
            <p className="text-[#702AFC]">|</p>
            <p className="text-[#702AFC]">Открыть пункт выдачи</p>
          </div>
          <div className="flex items-center justify-center gap-[10px] text-[14px] font-[400] cursor-pointer">
            <p className="text-[14px] font-[400]">Вопрос-ответ</p>
            <p className="text-[14px] font-[400]">Мои заказы</p>
            <p className="text-[14px] font-[400]">Русский</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-[100%] pt-[25px] pb-[25px] pl-[400px] pr-[400px]">
        <div className="flex items-center justify-center gap-[15px] cursor-pointer">
          <div className="w-[30px] cursor-pointer">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              draggable="false"
            />
          </div>
          <p className="text-[#7000FF] text-[25px] font-[700]">uzum market</p>
        </div>
        <div className="flex items-center justify-center gap-[10px]">
                <button>
                    
                </button>
        </div>
      </div>
      <div></div>
    </header>
  );
}

export default header_func;
