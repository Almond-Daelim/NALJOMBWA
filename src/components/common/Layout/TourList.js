import Tour from '../../../Api/Tour/Tour';

const TourList = data => {
  //const data = Tour();
  console.log(data);
  const listItems = data
    .filter(data => data.firstimage && data)
    .map((post, idx) => {
      return (
        <div key={idx}>
          <ul>
            <ul class=" bg-slate-400 w-full  h-[304px] rounded-[10px]">
              <img
                class="w-[100%] h-[100%] object-cover rounded-[10px]"
                src={post.firstimage}
                alt={post.title + '이미지'}
              />
            </ul>
            <li>{post.title}</li>
            <li>{post.addr1}</li>
          </ul>
        </div>
      );
    });

  return (
    <div className="grid justify-center grid-cols-auto-fit gap-x-[34px] gap-y-[82px]">
      {listItems}
    </div>
  );
};

export default TourList;
