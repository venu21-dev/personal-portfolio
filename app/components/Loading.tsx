export function Loading(){
    return(
        <div className="flex justify-center items-center min-h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-2xl"
        >
          <source src="/assets/still_in_work1.mp4" type="video/mp4" />
        </video>
      </div>
    )
}