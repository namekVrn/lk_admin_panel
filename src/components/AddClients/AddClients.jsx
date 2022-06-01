import { useState } from 'react';
import '../AddClients/addClients.css';
import { useDispatch } from 'react-redux';
import { addClient } from 'redux/clients/clients-operation';
import { notification, } from 'antd';


import { UserAddOutlined } from '@ant-design/icons';
import initializationState from '../utils/initialStateClients'
const AddClients = () => {
  const dispatch = useDispatch()
  const [addClients, setAddClients] = useState(initializationState);
  const onChangeForm = e => {
    const { value, name } = e.target
    setAddClients({ ...addClients, [name]: value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault()
    dispatch(addClient(addClients))
    setAddClients(initializationState)
    openNotification()
  }
  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };
  
  const openNotification = () => {
    const key = `open${Date.now()}`;
    
    notification.open({
      message: 'Внимание',
      description:
        'Новый клиент добавлен',
      
      key,
      onClose: close,
    });
  };
  const {
    surname,
    name,
    patronymic,
    dateBirth,
    gender,
    tel,
    image, // eslint-disable-line
    comment,
    addressReg,
    dateMontage,
    dateСompletion
  } = addClients;
  return (
    <>
      <form className="addClients__form" onSubmit={onSubmitForm}>
        <div className="addClients__form--slice">
          <div className="addClients__form--info">
            <input
              className="addClients__form--surname"
              type="text"
              name="surname"
              value={surname}
              placeholder="Фамилия"
              onChange={onChangeForm}
              autoComplete="off"
            />
            <input
              className="addClients__form--name"
              type="text"
              name="name"
              value={name}
              placeholder="Имя"
              onChange={onChangeForm}
              autoComplete="off"
            />
            <input
              className="addClients__form--patronymic"
              type="text"
              name="patronymic"
              value={patronymic}
              placeholder="Отчество"
              onChange={onChangeForm}
              autoComplete="off"
            />
            {/* <DatePicker className="addClients__form--date" name='name' value={dateBirth} onChange={onChangeForm}/> */}
            <label className='addClients__form--label'>
              Дата рождения:
              <input
                className="addClients__form--date"
                type="date"
                name="dateBirth"
                value={dateBirth}
                placeholder="Дата рождения"
                onChange={onChangeForm}
                autoComplete="off"
              />
            </label>
            <label className='addClients__form--label'>
              Дата назначения монтажа:
            <input
              className="addClients__form--date"
              type="date"
              name="dateMontage"
              value={dateMontage}
              placeholder="Дата монтажа"
              onChange={onChangeForm}
              autoComplete="off"
            />
            </label>
           <label className='addClients__form--label'>
           Дата окончания монтажа:
           <input
              className="addClients__form--date"
              type="date"
              name="dateСompletion"
              value={dateСompletion}
              placeholder="Дата выполнения заявки"
              onChange={onChangeForm}
              autoComplete="off"
            />
           </label>
            
            <label className="addClients__form--gender">
              Выбрать пол:
              <select name="gender" value={gender} onChange={onChangeForm}>
                <option value="" disabled>
                  ...
                </option>
                <option value="Мужской">Мужской</option>
                <option value="Женский">Женский</option>
              </select>
            </label>
          </div>
          <div className="addClients__form--info">
            
            <input
              className="addClients__form--tel"
              type="tel"
              name="tel"
              value={tel}
              placeholder="Контактный телефон"
              onChange={onChangeForm}
            />
            <input
              className="addClients__form--comment"
              type="text"
              name="comment"
              value={comment}
              placeholder="Комментарии"
              onChange={onChangeForm}
            />
            <textarea
              className="addClients__form--addressReg"
              placeholder="Адрес регистрации"
              value={addressReg}
              name="addressReg"
              onChange={onChangeForm}
              autoComplete="false"
            />
            
            
          </div>
        </div>
        <button className="addClients__form--btn" type="submit">
          <UserAddOutlined/> ДОБАВИТЬ
        </button>
      </form>
    </>
  );
};
export default AddClients;
