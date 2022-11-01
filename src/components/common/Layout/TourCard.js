const TourCard = api_data => {
  const tourData = api_data;
  const { firstimage, title, addr1 } = tourData.data;
  return (
    <div className="grid justify-center grid-cols-auto-fit gap-x-[34px] gap-y-[82px]">
      <ul>
        <ul class=" bg-slate-400 w-full  h-[304px] rounded-[10px]">
          <img
            class="w-[100%] h-[100%] object-cover rounded-[10px]"
            src={firstimage}
            alt={title + '이미지'}
          />
        </ul>
        <li>{title}</li>
        <li>{addr1}</li>
      </ul>
    </div>
  );
};

export default TourCard;
