import FilterSelect from './FilterSelect';

export default function YearSelect({ onSelectChange }) {
  return (
    <div className={'flex flex-row gap-6'}>
      <div className={'flex-grow'}>
        <FilterSelect name={'yearMin'} nameUser={'Рік від'} options={['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']}  onSelectChange={onSelectChange}></FilterSelect>
      </div>
      <div className={'flex-grow'}>
        <FilterSelect name={'yearMax'} nameUser={'Рік до'} options={['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']}  onSelectChange={onSelectChange}></FilterSelect>
      </div>
    </div>
  );
}
