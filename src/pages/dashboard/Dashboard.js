// components
import Sidebar from '../../components/Sidebar'

// styles 
import './Dashboard.css'


export default function Dashboard() {

  const SplitText = (({ str }) => {
    return (
      <div>
        {str.split("").map((item, index) => {
          return <div className='dashboardText inline-block' key={index}>{item}</div>;
        })}
      </div>
    );
  });



  return (
    <div>
      <Sidebar />
      <div className="content p-10">
        <h1 className='flex justify-center mb-4 pb-2 mx-16 text-4xl font-bold border-b border-violet-200'>Dashboard</h1>

        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 text-center text-xl max-md:text-lg">
          <p className='bg-neutral-200 p-10 shadow-xl rounded max-md:rounded-xl max-md:mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat architecto, voluptatem eligendi corrupti amet voluptas, neque beatae error saepe facilis assumenda ducimus repellendus praesentium ipsum autem corporis. Corporis soluta impedit voluptatem repudiandae asperiores error, nisi accusamus amet, nulla atque temporibus architecto dolor dicta molestiae id iure quaerat eaque esse reiciendis aut! Eveniet deleniti ducimus minima eos? </p>
          <p className='bg-neutral-200 p-10 shadow-xl rounded max-md:rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat architecto, voluptatem eligendi corrupti amet voluptas, neque beatae error saepe facilis assumenda ducimus repellendus praesentium ipsum autem corporis. Corporis soluta impedit voluptatem repudiandae asperiores error, nisi accusamus amet, nulla atque temporibus architecto dolor dicta molestiae id iure quaerat eaque esse reiciendis aut! Eveniet deleniti ducimus minima eos? </p>
        </div>
          <div className="flex justify-center text-8xl p-4 my-10 max-md:text-5xl">
          <span className="border-y-2 p-4 my-10"><SplitText str={"Hover"} /></span>
          <span className="border-y-2 p-4 my-10"><SplitText str={"Me"} /></span>
          </div>
      </div>
    </div>
  )
}
