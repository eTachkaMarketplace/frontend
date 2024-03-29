import React from 'react';
import {Container,Title,SubTitle,Content} from './RulesPage.styled';

const RulesPage = () => {
  return (
    <Container>
      <Title>ПРАВИЛА ПУБЛІКАЦІЇ ОГОЛОШЕНЬ</Title>
      <Content>
        <SubTitle>Тачка Є працює на ринку вже понад 20 років. І для нас важливо, щоб портал Тачка Є для кожного охочого купити або продати автомобіль, спецтехніку або запчастини був надійним та перевіреним ресурсом.
        </SubTitle>
        <SubTitle>Нижче представлені основні правила. Просимо їх дотримуватися при розміщенні свого оголошення.
        </SubTitle>
        <SubTitle>При розміщенні оголошення Користувачеві <strong>забороняється:</strong>
        </SubTitle>
        <ul className='list_ul'>
            <li>Публікувати оголошення, в яких вартість товару не відповідає ринковій.</li>
            <li>Публікувати оголошення, які спонукають користувача проводити передоплати і такі, які можуть вводити користувача в оману.</li>
            <li>Публікувати оголошення, яке містить інформацію про технічний засіб, якого немає в наявності (пригін по передплаті, в кредит, на замовлення або ін).</li>
            <li>Публікувати оголошення про продаж транспортних засобів, використовуючи фотографії товару, який не є конкретним предметом продажу (використовуючи фотографії товару інших користувачів або фотографії, завантажені в мережі Інтернет і не є фотографією транспортного засобу, який пропонується до продажу).</li>
            <li>Публікувати оголошення про продаж товару, право на продаж якого відсутнє.</li>
            <li>Розміщувати оголошення, яке передбачає не продаж транспортного засобу, а надання інформаційно-консультаційних послуг.</li>
            <li>Публікувати оголошення з пропозицією кількох товарів і послуг одночасно.</li>
            <li>Вставляти в оголошенні посилання на ресурси, що містять шкідливі елементи.</li>
            <li>Розміщувати оголошення про товар або послугу, якщо таке розміщення може призвести до порушення законодавства України.</li>
            <li>Публікувати однакові оголошення з однієї адреси електронної пошти / номера мобільного телефону.</li>
            <li>Публікувати схожі за змістом оголошення, де очевидно, що мова йде про ту саму пропозицію.</li>
            <li>Дублювати однакові оголошення з різних адрес електронної пошти / номерів мобільних телефонів.</li>
            <li>Публікувати оголошення в рубриці, яка не відповідає змісту оголошення.</li>
            <li>Публікувати оголошення, в заголовку яких містяться повторювані знаки пунктуації та / або не буквені символи.</li>
            <li>Публікувати оголошення, в описовій частині яких вказується вартість товару, відмінна від зазначеної у відповідному полі оголошення, призначеного для відображення вартості товару.</li>
            <li>Публікувати оголошення, опис і / або заголовок / фотографії яких не пов'язані або нерозбірливі.</li>
          </ul>
          <p>Крім того, можуть також бути деактивовані або заблоковані оголошення, на яких отримана скарга</p>
      </Content>
    </Container>
  );
};


export default RulesPage;
