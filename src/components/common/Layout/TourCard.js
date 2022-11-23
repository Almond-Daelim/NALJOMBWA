import { Link } from 'react-router-dom';
const TourCard = api_data => {
  const tourData = api_data;
  const {
    firstimage,
    title,
    addr1,
    firstimage2,
    contentid,
    contenttypeid,
    restdateculture,
    restdate,
  } = tourData.data;

  return (
    <div className="grid justify-center grid-cols-auto-fit gap-x-[34px] gap-y-[82px]">
      <Link
        to={`/detail/${title}`}
        state={{
          firstimage: firstimage,
          firstimage2: firstimage2,
          title: title,
          addr1: addr1,
          contentId: contentid,
          contentTypeTd: contenttypeid,
          restDateCulture: restdateculture,
          restDate: restdate,
        }}
      >
        <ul>
          <ul className=" bg-slate-400 w-full  h-[304px] rounded-[10px]">
            <img
              className="w-[100%] h-[100%] object-cover rounded-[10px] shadow-md"
              src={firstimage}
              alt={title + '이미지'}
            />
          </ul>

          <li className="text-lg font-bold mt-2 dark:text-white">{title}</li>
          <li className=" dark:text-gray-400">{addr1}</li>
        </ul>
      </Link>
    </div>
  );
};

export default TourCard;
