import cn  from 'classnames';
import Icon from '../Icon';
import './style.scss';
import author from '../../resources/author.png';

interface IPropsCard {
  name: string,
  thumbnail: string,
  dateFirst: number,
  dateSecond: number,
  onClick?: () => void,
  isDark?: boolean,
} 

export const Card = ({name, thumbnail, dateFirst, dateSecond, isDark}:IPropsCard) => {
  return (
    <li 
      className={cn('card', {'card--dark': isDark} )
    }>
        <img src={thumbnail} 
          className={cn("card__images")}
         alt="author icon"/>
        <div className={cn("card__block")}>
          <div className={cn("card__info")}>
              <span className={cn("card__name")}> {name} </span>
              <time className={cn("card__date")}> {dateFirst} - {dateSecond} </time>
            </div>
            <div className={cn("card__arrow")}>
                <Icon type="Arrow" />
            </div>
        </div>
    </li>
  );
};
