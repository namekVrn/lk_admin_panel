import { useDispatch, useSelector } from 'react-redux';
import { Table, Typography, Input, Button, Space, Modal, message} from 'antd';
import Highlighter from 'react-highlight-words';
import { NavLink } from 'react-router-dom';
import { SearchOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useRef, useState, useEffect } from 'react';
import { DeleteOutlined} from '@ant-design/icons';
import { fetchClientsGet, clientDelete} from 'redux/clients/clients-operation';
const ClientList = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const clients = useSelector(store => store.clients.client);
  const dispatch = useDispatch()

  console.log(clients);
  useEffect(()=>{
    dispatch(fetchClientsGet())
  }, [])
  const {
      /*ignore jslint start*/
    surname, // eslint-disable-line
    name, // eslint-disable-line
    patronymic, // eslint-disable-line
    dateBirth, // eslint-disable-line
    gender, // eslint-disable-line
    tel, // eslint-disable-line
    image, // eslint-disable-line
    comment, // eslint-disable-line
    addressReg, // eslint-disable-line
    date, // eslint-disable-line
    key, // eslint-disable-line
    dateСompletion, // eslint-disable-line
    dateMontage // eslint-disable-line
    /*ignore jslint end*/
  } = clients;
  const showConfirm = (id) => {
    const { confirm } = Modal;
    confirm({
      title: 'Действительно удалить клиента?',
      icon: <ExclamationCircleOutlined />,
      content: `Клиент с ID : ${id}`,
  
      onOk() {
        console.log('OK');
        dispatch(clientDelete(id))
        message.success('Клиент удален')
      },
  
      onCancel() {
        return
      },
    });
  };
 

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),

    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const column = [
    
    {
      title: 'ID',
      dataIndex: '',
      key: 'id',
      render: (store)=>{return <NavLink to={`/clientList/${store.id}`}>Карточка: {store.id}</NavLink> }
    },
    {
      title: 'Фамилия',
      dataIndex: 'surname',
      key: 'id',
      sorter: (a, b) => a.surname.localeCompare(b.surname),
      ...getColumnSearchProps('surname'),
    },
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'id',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Отчество',
      dataIndex: 'patronymic',
      key: 'id',
      ...getColumnSearchProps('patronymic'),
    },
    {
      title: 'Дата рождения',
      dataIndex: 'dateBirth',
      key: 'id',
      ...getColumnSearchProps('dateBirth')
    },
    {
      title: 'Пол',
      dataIndex: 'gender',
      key: 'id',
      ...getColumnSearchProps('gender')
    },
    {
      title: 'Телефон',
      dataIndex: 'tel',
      key: 'id',
      ...getColumnSearchProps('tel'),
      sortDirections: ['descend', 'ascend'],
      render: (text) => {return <><Typography.Text copyable>{text}</Typography.Text> <br/> </>},
       
    },
    {
      title: 'Дата добавления',
      dataIndex: 'date',
      key: 'id',
      sorter: (a, b) => a.date - b.date,
      ...getColumnSearchProps('date')
    },
    {
      title: 'Адрес',
      dataIndex: 'addressReg',
      key: 'id',
      render: text => <Typography.Text copyable>{text}</Typography.Text>,
      ...getColumnSearchProps('addressReg')
    },
    {
      title: 'Комментарий',
      dataIndex: 'comment',
      key: 'id',
      ...getColumnSearchProps('comment')
    },
    {
      title: 'Дата назначения монтажа',
      dataIndex: 'dateMontage',
      key: 'id',
      ...getColumnSearchProps('dateMontage')
    },
    {
      title: 'Дата окончания монтажа',
      dataIndex: 'dateСompletion',
      key: 'id',
      ...getColumnSearchProps('dateСompletion'),
      render: (text) => {return (<p>{text ? text : "нет даты"}</p>)},
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'id',
      render: (text) => {return (
        <div>
          <Button type="dashed" onClick={()=>{showConfirm(text.id)}}><DeleteOutlined />delete</Button>
        </div>
      )},
    },
  ];
  return (
    <>
      <Table dataSource={clients} columns={column} />
    </>
  );
};
export default ClientList;
