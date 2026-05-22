function MealInformationComponenent() {
  return (
    <section id="meal-info" className="border border-brand-grey rounded-3xl px-8 py-6">
      <h2 className="text-2xl text-brand-black font-bold mb-4">Meal Information</h2>

      <div className="mb-4">
        <label className="block text-sm text-brand-black mb-1">Meal name</label>
        <input type="text" placeholder="Eg. Nachos" className="w-full border border-brand-grey rounded-lg p-2 focus:border-accent outline-none" />
      </div>

      <div>
        <label className="block text-sm text-brand-black mb-1">Meal Description</label>
        <textarea placeholder="Write meal details..." className="w-full border border-brand-grey rounded-lg p-2 pb-17 focus:border-accent outline-none" />
      </div>
    </section>
  )
}
export default MealInformationComponenent
