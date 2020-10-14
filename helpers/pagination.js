export const pagination = (current) => {
    let pages = [];
    let numberOfPages = 1;
    let end = 10;
    if((current+4)<11){
        end = 10;
    }else{
        end = current+4;
        numberOfPages = end - 9;
    }
    while (numberOfPages<=end){
        pages.push(numberOfPages);
        numberOfPages++;
    }
    return pages;
}
export const paginationMob = (current) => {
    let pages = [];
    let numberOfPages = 1;
    let end = 5;
    if((current+2)<6){
        end = 5;
    }else{
        end = current+2;
        numberOfPages = end - 4;
    }
    while (numberOfPages<=end){
        pages.push(numberOfPages);
        numberOfPages++;
    }
    return pages;
}
