const Contact = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl w-6/12 text-center m-auto">Contact us</h1>
        <div className="my-4 w-8/12 flex justify-center m-auto">
          <form action="submit">
            <label htmlFor="">Your name</label>
            <input type="text" className="border border-black m-4" />
            <label htmlFor="">Your contact number</label>
            <input type="text" className="border border-black m-4" />
            <button className="border border-black m-4 bg-yellow-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
