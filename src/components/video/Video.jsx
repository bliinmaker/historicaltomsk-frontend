export const Video = () => {
 return(
    <section id="video">
        <div className="video-wrapper flex">
            <video loop>
                <source src="../../assets/video-section.mp4" type="video/mp4"></source>
            </video>
        </div>
    </section>
 )
}