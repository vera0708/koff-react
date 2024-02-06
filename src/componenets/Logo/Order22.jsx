 (
    <section className={s.order}>
      <Container className={s.container}>
        <div className={s.content}>
          <div className={s.header}>
            <h2 className={s.title}>Заказ успешно размещен</h2>
            <p className={s.price}>
              {.totalPrice.toLocaleString()}&nbsp;₽
            </p>
          </div>

          <p className={s.number}>№{.id}</p>

          <div className={s.tableWrapper}>
            <h3 className={s.tableTitle}>Данные доставки</h3>
            <table className={s.table}>
              <tbody>
                <tr className={s.row}>
                  <td className={s.field}>Получатель</td>
                  <td className={s.value}>{.name}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Телефон</td>
                  <td className={s.value}>{.phone}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>E-mail</td>
                  <td className={s.value}>{.email}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Адрес доставки</td>
                  <td className={s.value}>{.address}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Способ оплаты</td>
                  <td className={s.value}>{.paymentType}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Способ получения</td>
                  <td className={s.value}>{.deliveryType}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <a className={s.back} href="/">
            На главную
          </a>
        </div>
      </Container>
    </section>
  );

