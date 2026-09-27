import type { TimeSlot, Weekday, WeeklySchedule } from "../types.domain";


const DEFAULT_SLOT: TimeSlot = { from: "08:00", to: "22:00" } as TimeSlot;


function useScheduleDraftEditor(scheduleDraft:WeeklySchedule, onScheduleChange: (newSchedule: WeeklySchedule) => void) {

  // const updateDay = (day:Weekday,) => {

  // }

  const handleToggle = (selectedDay: Weekday, isOpen: boolean) => {

    //if it's open , mark it as closed in the schedule
    if (isOpen) {
      const newSchedule = scheduleDraft.map((day)=>{
        if(day.day === selectedDay) return {...day, slots: []}
        return day;
      })

      onScheduleChange(newSchedule)
      return
    }

    // if it's not open add new slot with default values:
    const newSchedule = scheduleDraft.map((day)=>{
      if(day.day === selectedDay) return {...day, slots: [DEFAULT_SLOT]}
      return day;
    })

    onScheduleChange(newSchedule)
  }

  const handleAddSlot = (selectedDay: Weekday) => {

    // add new time slot (default values) to the selected day in the schedule draft
    const newSchedule = scheduleDraft.map((day)=>{
      if(day.day == selectedDay){
        return {...day, slots: [...day.slots, DEFAULT_SLOT] }
      }
      return day;
    })

    onScheduleChange(newSchedule)
  }

  const handleRemoveSlot = (selectedDay: Weekday, selectedIndex: number) => {

    //select the day from schedule then remove the selected slot (index)
    const newSchedule = scheduleDraft.map((day)=>{
      if(day.day == selectedDay){
        return {
          ...day,
          slots: day.slots.filter((_, index) => index !== selectedIndex),
        }
      }
      return day;
    })

    onScheduleChange(newSchedule)
  }

  const handleChangeSlot = (selectedDay: Weekday, selectedIndex: number, updatedSlot: TimeSlot) => {

    //select the day from schedule then select the desired slot (with index) then replace it with the new UpdateSlot
    const newSchedule = scheduleDraft.map((day)=>{
      if(day.day == selectedDay){
        return {
          ...day,
          slots: day.slots.map((s, index) => {
            if (index === selectedIndex){
              return updatedSlot
            }
            return s
          }),
        }
      }
      return day;
    })

    onScheduleChange(newSchedule)

  }




  return {
    handleToggle,
    handleChangeSlot,
    handleAddSlot,
    handleRemoveSlot
  }
}

export default useScheduleDraftEditor