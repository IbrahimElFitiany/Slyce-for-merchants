interface MealImagePreviewProps {
  finalImage:string;
  mealName:string;
}

function MealImagePreview({finalImage, mealName}:MealImagePreviewProps) {
  return (
    <div className="flex flex-col gap-y-3">

      <div className="bg-[hsl(0,2%,90%)] rounded-lg p-3.5 pb-0 border-1 border-brand-grey">

        <div className="flex flex-col rounded-4xl">

          {/* image */}
          <div className="w-full h-49 rounded-4xl overflow-hidden">
            <img src={finalImage} className="w-full h-full object-cover"/>
          </div>

          {/* title and skelaton */}
          <div className="flex flex-col rounded-t-2xl -mt-10 px-4 bg-whitebg">

            <p className="font-semibold text-brand-black text-lg">{mealName}</p>
            <div>
              <section className="flex flex-col gap-y-2 py-2">
                <div className="bg-brand-grey w-full h-3 rounded-sm animate-pulse"></div>
                <div className="bg-brand-grey w-full h-3 rounded-sm animate-pulse"></div>
                <div className="bg-brand-grey w-2/3  h-3 rounded-sm animate-pulse"></div>
              </section>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}
export default MealImagePreview