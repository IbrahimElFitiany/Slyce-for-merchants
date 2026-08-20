interface MealImageListingPreviewProps {
  mealName:string;
  finalImage:string
}

function MealImageListingPreview({mealName, finalImage: mealImage}:MealImageListingPreviewProps) {

  return (
    <div className="flex flex-col">

      <div className="bg-[hsl(0,2%,90%)] rounded-lg p-3.5 pb-0 border-1 border-brand-grey">

          <div className="w-full flex flex-col p-1 gap-y-1 rounded-t-lg bg-whitebg">

            <div className="flex border-b-1 pb-1 gap-x-1 border-brand-grey">

              <div className="w-15 h-15 shrink-0 rounded-md overflow-hidden border-1 border-brand-grey">
                <img src={mealImage} className="w-full h-full object-cover"/>
              </div>

              <div className="flex flex-col">
                <h1 className="text-sm font-semibold line-clamp-1">{mealName}</h1>

                <section className="flex flex-col gap-y-1 my-1">
                  <div className="bg-brand-grey w-full h-1.5 rounded-sm animate-pulse"></div>
                  <div className="bg-brand-grey w-full h-1.5 rounded-sm animate-pulse"></div>
                  <div className="bg-brand-grey w-2/3  h-1.5 rounded-sm animate-pulse"></div>
                </section>
              </div>
            </div>

            <div className="flex border-b-1 pb-1 gap-x-1 border-brand-grey mb-2">

              <div className="w-15 h-15 shrink-0 rounded-md animate-pulse bg-brand-grey"></div>

              <div className="flex flex-col w-full">

                <div className="bg-brand-grey w-2/3 h-2 rounded-xs animate-pulse my-1"></div>

                <section className="flex flex-col gap-y-1 my-1">
                  <div className="bg-brand-grey w-full h-1.5 rounded-xs animate-pulse"></div>
                  <div className="bg-brand-grey w-full h-1.5 rounded-xs animate-pulse"></div>
                  <div className="bg-brand-grey w-2/3  h-1.5 rounded-xs animate-pulse"></div>
                </section>
              </div>
            </div>

          </div>

      </div>


    </div>

  )
}
export default MealImageListingPreview