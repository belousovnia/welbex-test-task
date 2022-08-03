import { Select, Input } from "antd";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

const { Option } = Select;

function Filter(props) {
  const { setData } = props;

  const originData = useSelector(state => state.main.originData);

  const [patternFilter, setPatternFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState("=");
  const [fieldFilter, setFieldFilter] = useState("name");

  function filter() {
    if (patternFilter === '') return originData;

    switch(typeFilter){
      case '=': 
        return originData.filter((i) => {return i[fieldFilter].toUpperCase() == patternFilter.toUpperCase()});
      case 'contains': 
        return originData.filter((i) => {return (i[fieldFilter].toUpperCase().indexOf(patternFilter.toUpperCase()) !== -1)});
      case '>':
        if (fieldFilter === 'name' ) {
          return originData.filter((i) => {return (i[fieldFilter].toUpperCase() > patternFilter.toUpperCase())});
        } else {
          return originData.filter((i) => {return (Number(i[fieldFilter]) > Number(patternFilter))});
        }; 
      case '<': 
        if (fieldFilter === 'name' ) {
          return originData.filter((i) => {return (i[fieldFilter].toUpperCase() < patternFilter.toUpperCase())});
        } else {
          return originData.filter((i) => {return (Number(i[fieldFilter]) < Number(patternFilter))});
        }; 
    };
  };

  useEffect(() => {
    setData(filter());
  }, [patternFilter, typeFilter, fieldFilter, originData])
 
  return (
    <div className="filter">
      <Input.Group compact>
        <Select 
          defaultValue="name" 
          onChange={(i) => setFieldFilter(i)}
        >
          <Option value="name">Название</Option>
          <Option value="amount">Количество</Option>
          <Option value="distance">Растояние</Option>
        </Select>
        <Select 
          defaultValue="="
          onChange={(i) => setTypeFilter(i)}
        >
          <Option value="=">Равно</Option>
          <Option value="contains">Содержит</Option>
          <Option value=">">Больше</Option>
          <Option value="<">Меньше</Option>
        </Select>
        <Input 
          placeholder="Фильтр" 
          style={{width: '200px'}}
          onChange={(i) => {setPatternFilter(i.target.value)}}
        />
      </Input.Group>
    </div>
  );
}

export default Filter;