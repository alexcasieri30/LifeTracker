import "./HomePage.scss";

const HomePage = () => {

    return (
        <div className="HomePage-background">
            <div className="homepage-title-container">
                <div className="homepage-title">
                    LifeTracker . . . .
                </div>
            </div>
            <div className="homepage-description-container">
                <div className="homepage-description">
                    <div className="homepage-description-text">Track your . . . . </div>
                    <div className="homepage-description-carousel">Adventures</div>
                </div>
            </div>
            <div className="homepage-gettingstarted">
                <div className="homepage-gettingstarted-text">
                    Getting started...
                </div>
            </div>
            <div>

            </div>
            <div className="homepage-optionsgrid">
                <div className="homepage-optionsgrid-container">
                    <div className="homepage-optionsgrid-item">Mystuff</div>
                    <div className="homepage-optionsgrid-item">Create</div>
                    <div className="homepage-optionsgrid-item">About</div>
                    <div className="homepage-optionsgrid-item">Friends</div>
                </div>
            </div>
        </div>
    )
}


export default HomePage;