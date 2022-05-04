import {Review} from '../../types/review';
import {MONTHS_NAMES} from '../../consts';
import {ratingWidth} from '../../utils';

type CommentItemProps = {
  review: Review;
}

const transformDate = (dateToTransform: string): string => {
  const date = new Date(dateToTransform);
  return `${MONTHS_NAMES[date.getMonth()]} ${date.getFullYear()}`;
};

function CommentItem({review}: CommentItemProps): JSX.Element {
  const {user, comment, date, rating} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingWidth(rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{transformDate(date)}</time>
      </div>
    </li>
  );
}

export default CommentItem;
