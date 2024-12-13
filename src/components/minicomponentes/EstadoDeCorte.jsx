import moment from 'moment';

export default function EstadoDeCorte(params) {
    const now = moment();

    return(
        <>
            <p>Son las: {now.format('dddd')}</p>
        </>
    )
}