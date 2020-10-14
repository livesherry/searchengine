export default class OopsComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <div id="oops" class="my-5"> 
        <div class="container">
            <div class="text-center color-green py-3">
                    <img src="/images/oops.png" class="oops-img"></img>
                <h3 class="color-blue">Oops!</h3>
                 <br></br>
                <p>We <strong>don't show</strong> the result for unsafe search queries.</p>
                <p>We <strong>show</strong> search results that make the world <strong class="safer-color">safer</strong>.</p>
                <p>We <strong>show</strong> search results, which are safer  for our society and community.</p>
                <br></br>
                <button type="button" class="btn btn-learn">Learn More</button>
            </div>
            </div>
            <br></br>
            <br></br>
            
        </div> 
            </>
        );
    }
}