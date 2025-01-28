import dayjs from 'dayjs'

interface Props {
    author: string,
    comment: string
    dateAdded: number
}

export default function Comment(props: Props) {

    const formatDate = (date: number) => {
        return dayjs(date).format('MM-DD-YYYY');
    }

    return (
        <div className="card bg-primary text-primary-content w-96 m-3 rounded-md">
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title">{props.author}</h2>
                    <span>{formatDate(props.dateAdded)}</span>
                </div>
                <p>{props.comment}</p>
            </div>
        </div>
    )

}