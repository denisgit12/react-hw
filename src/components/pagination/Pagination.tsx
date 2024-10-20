import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {Pagination, Stack} from "@mui/material";

type PaginationProps = {
    flag:boolean,
    productsTotal:number
}

const PaginationComponent: FC<PaginationProps> = ({flag, productsTotal}) => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const count =Math.ceil(productsTotal/10) ;
    const page = query.get('page');

const change = (page:number):void => {
    setQuery({page:page.toString()})

}
    const onClickPrev = () => {

        if (page && +page>1) {
            let pageNumber = +page
            pageNumber--;
            setQuery({page:pageNumber.toString()})
        }
    }
    const onClickNext = () => {
        const page = query.get('page');
        if (page) {
            let pageNumber = +page
            pageNumber++;
            setQuery({page:pageNumber.toString()})
        }
    }

    return (
        <div>{page ?
            <Stack  spacing={+page}>
                <Pagination onChange={ (event,page) => change(page)} page={+page}  count={count} color="secondary" />

            </Stack>:
            <div>
                <button onClick={onClickPrev}>prev</button>
                <button onClick={onClickNext} disabled={flag}>next</button>
            </div>
        }


        </div>
    );
};

export default PaginationComponent;