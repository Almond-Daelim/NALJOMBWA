import img from '../../../assets/icons8-loading-circle.gif';

const Spinner = () => {
  return (
    <div class="mx-auto w-24">
      <img
        src={img}
        alt="iicons8-loading-circle"
      />
      <span class="text-2xl block mx-auto text-center">Loding..</span>
    </div>
  );
};

export default Spinner;
