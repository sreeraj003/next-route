import { notFound } from 'next/navigation'

function Review({params}) {
    if(parseInt(params.reviewId)>1000){
        console.log(params.reviewId);
        notFound();
    }
        return (
    <div>Review {params.reviewId} for produc {params.Id}</div>
  )
}

export default Review