const TourCard = api_data => {
  // eslint-disable-next-line react/destructuring-assignment
  const tourData = api_data.data;
  const cardData = {
    firstimage: tourData.firstimage,
    title: tourData.title,
    addr1: tourData.addr1,
  };

  return (
    <div className="grid justify-center grid-cols-auto-fit gap-x-[34px] gap-y-[82px]">
      <ul>
        <ul class=" bg-slate-400 w-full  h-[304px] rounded-[10px]">
          <img
            class="w-[100%] h-[100%] object-cover rounded-[10px]"
            src={cardData.firstimage}
            alt={cardData.title + '이미지'}
          />
        </ul>
        <li>{cardData.title}</li>
        <li>{cardData.addr1}</li>
      </ul>
    </div>
  );
};

export default TourCard;
