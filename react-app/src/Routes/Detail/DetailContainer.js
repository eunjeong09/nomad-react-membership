import React from "react";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";


export default class extends React.Component {
    constructor(props) {
        super(props);
        const { location: { pathname } } = this.props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        }
    }



    async componentDidMount() {
        const { match: { params: { id } }, history: { push },
        } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push("/");
        }
        let result=null;
        try{
            if(isMovie){
                ({ data: result } = await moviesApi.movieDetail(parsedId));
            }else{
                ({ data: result } = await tvApi.showDetail(parsedId));
            }
        }catch{
            this.setState({error:"Can't find anything."});
        }finally{
            this.setState({loading:false, result});
        }
        if (isMovie) {

        }
    }

    render() {
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter result={result} error={error} loading={loading} />
        )
    }
}