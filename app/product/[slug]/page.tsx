"use client";

import Footer from "@/src/components/footer/Footer";
import {
  AddToShoppingCard,
  BuyersExperiences,
  DescriptionProduct,
  DetailProduct,
  OptionsProduct,
  ProductView,
  RecommendationsProduct,
  SearchBar,
  TopComments,
  TypeProductBreadcrumb,
} from "@/src/components/productPage";

import { ArrowRightProduct, NoavarLogo, ShoppingCard } from "@/src/icons";

import { useGetProductByIdQuery } from "@/src/lib/services/getSpecialProduct";
import { useAppSelector } from "@/src/lib/store/hooks";

import { ToastContainer } from "react-toastify";
import Loading from "./loading";

const Page = () => {
  const idProduct = useAppSelector((state) => state.favorite);
  const { data, isSuccess, isLoading } = useGetProductByIdQuery(idProduct);

  if (isSuccess) {
    console.log(data.data);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="bg-[#F7F9FC] mb-20">
        {isSuccess && (
          <>
            <div className="p-4 lg:p-0 flex flex-col gap-4 ">
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="size-[40px] flex justify-center items-center bg-white rounded-lg cursor-pointer">
                    <ArrowRightProduct />
                  </div>
                  <div className="flex justify-center items-center">
                    <NoavarLogo />
                  </div>
                </div>
                <div className="size-[40px] flex justify-center items-center bg-white rounded-lg cursor-pointer">
                  <ShoppingCard />
                </div>
              </div>
              <SearchBar />
              <TypeProductBreadcrumb listBreadcrumb={data.data.breadcrumb} />
            </div>
            <div className="p-4 lg:p-0 bg-[#FFFFFF]">
              <ProductView
                title={data.data.title}
                image={data.data.product_images}
                author={data.data.quick_view_meta[0].value}
                rate_average={data.data.rate_average}
                comments_count={data.data.comments_count}
                videoDetail={data.data.introduction_video}
                type={data.data.type}
              />
            </div>
            <DetailProduct detailsProduct={data.data.quick_view_meta} />
            <RecommendationsProduct expert={data.data.exerpt} />
            <DescriptionProduct />
            <OptionsProduct
              name={data.data.type.name}
              id={data.data.type.id}
              slug={data.data.type.slug}
            />
            <BuyersExperiences
              typeProduct={data.data.type}
              commentsSummary={data.data.comments_summary}
              optionsSummary={data.data.opinions_summary}
            />
            <TopComments
              topComments={data.data.comments}
              type={data.data.type}
            />
            <AddToShoppingCard
              price={data.data.price.regular_price}
              offSale={data.data.price.sale_price}
            />
          </>
        )}
        <ToastContainer />
        <Footer />
      </section>
    </>
  );
};

export default Page;
