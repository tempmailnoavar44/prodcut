import { ArrowLeftDescriptionProduct } from "@/src/icons";
import { useState } from "react";
import Modal from "../Modal";
import ModalRecommendationsProduct from "./ModalRecommendationsProduct";

const tempDescription = `دارای طبقه‌بندی موضوعی سوالات آزمون‌ها بر اساس مباحث و فصل‌ها جایگزینی
        سوالات تالیفی و ویرایشی با سوالات منسوخ شده مباحث قدیم به همراه تحلیل و
        بررسی هر آزمون جهت کسب بهترین آمادگی در آزمون تعیین کلید واژه مربوط به
        هر سوال و تعیین سوالات مشابه هر آزمون تعیین درجه سختی و آسانی هر سوال
        جهت مدیریت بهینه زمان ارائه پاسخنامه گام به گام و کاملا تشریحی سوالات
        آزمون تا آخرین دوره بر اساس آخرین ویرایش منابع و مباحث دفتر مقررات ملی
        ساختمان به همراه تشریح سوالات آخرین آزمون برگزار شده (مهر ماه 1402). کتاب تشریح کامل سوالات آزمون‌ نظام مهندسی عمران نظارت شامل آزمون‌های ادوار گذشته از شهریورماه ۱۳۹۵ تا مهر ماه ۱۴۰۲ می‎‌باشد. 

مقدمه:
با توجه به استقبال روز افزون از آزمون‌های نظام مهندسی برای دریافت پروانه اشتغال به کار و ورود به حرفه مهندسان، وجود کتابی جامع، که سوالات ادوار گذشته را به صورت مستند و گام به گام تحلیل و تشریح کرده باشد، برای موفقیت داوطلبان حائز اهمیت می‌باشد، از این رو در مجموعه انتشارات نوآور سعی شده است در هر دوره، کتابی به روز و متناسب با آخرین ویرایش مباحث مقررات ملی ساختمان ارائه شود. به خواست خداوند متعال، این کتاب در  مدت زمان کوتاهی توانسته جایگاه خود را در بین مخاطبان گرامی به دست آورد و به واسطه این استقبال، وظیفه خود دانستیم که با تمام تلاش خود، کتابی قوی، کامل و با جدیدترین تکنیک‌های حل مسئله، برای شما مهندسین عزیز فراهم نماییم. برای استفاده هرچه بهتر از این کتاب و آشنایی با آزمون نظام مهندسی عمران، صلاحیت نظارت، توصیه می‌کنیم که مهندسین گرامی، حتما مطالب و راهنمایی‌های گفته شده در مقدمه را دنبال کنند تا بتوانند ویژگی‌های قرار داده شده در کتاب را بهتر بشناسند و از آن‌ها در راستای پیشرفت خود استفاده کنند.`;

const DescriptionProduct = () => {
  const [isOpenModalRecommend, setIsOpenModalRecommend] = useState(false);

  return (
    <div className="mt-4 px-4 w-full h-[224px] bg-white">
      <h4 className="pt-4 pb-2 font-medium text-sm">توضیحات ها</h4>
      <hr />
      <p className="pt-4 font-normal text-xs text-gray-400 leading-6 line-clamp-4">
        {tempDescription}
      </p>
      <div className="flex justify-end items-center py-4 cursor-pointer">
        <div className="flex justify-between items-center lg:pr-0">
          <div className="flex gap-2 items-center justify-center cursor-pointer text-domaint-500 text-xs">
            <h4 onClick={() => setIsOpenModalRecommend(true)}>مشاهده همه</h4>
            <span>
              <ArrowLeftDescriptionProduct />
            </span>
          </div>
        </div>
      </div>
      {isOpenModalRecommend && (
        <Modal closeModal={() => setIsOpenModalRecommend(false)}>
          <ModalRecommendationsProduct
            closeModal={() => setIsOpenModalRecommend(false)}
            expert={tempDescription}
          />
        </Modal>
      )}
    </div>
  );
};

export default DescriptionProduct;
