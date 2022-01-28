import image from '../../../../images/scamtis-home.png'

export function ProjectView() {
    return <div className="h-screen w-full text-secondary">
        <div className="h-[75vh] w-full bg-primary text-secondary">
            {/* <div className='w-full flex justify-center items-center text-[40px] translate-y-[100px] '>SCAMTIS</div> */}
            <div className="w-[70vw] mx-auto ml-[15vw]  shadow-2xl z-50 bg-[red] translate-y-[40vh] rounded-xl ">
                <img src={image} alt='image' className='w-full shadow-2xl rounded-xl ' />
            </div>
        </div>
        <div className="h-screen w-full bg-[white] text-primary"></div>
    </div>
}