

import { Component } from "@angular/core";


@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})


export class MainComponent {


  subs_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      let sub_00: any = document.querySelectorAll(
        <string>(
          String(".sub00")
        ));
      let sub_01: any = document.querySelectorAll(
        <string>(
          String(".sub01")
        ));
      let sub_02: any = document.querySelectorAll(
        <string>(
          String(".sub02")
        ));
      let sub_10: any = document.querySelectorAll(
        <string>(
          String(".sub10")
        ));
      let sub_11: any = document.querySelectorAll(
        <string>(
          String(".sub11")
        ));
      let sub_12: any = document.querySelectorAll(
        <string>(
          String(".sub12")
        ));
      let sub_20: any = document.querySelectorAll(
        <string>(
          String(".sub20")
        ));
      let sub_21: any = document.querySelectorAll(
        <string>(
          String(".sub21")
        ));
      let sub_22: any = document.querySelectorAll(
        <string>(
          String(".sub22")
        ));
      [...sub_00, ...sub_11, ...sub_22].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 0, 0)")
        );
      });
      [...sub_01, ...sub_12, ...sub_20].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 244, 0)")
        );
      });
      [...sub_02, ...sub_10, ...sub_21].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 0, 244)")
        );
      });
    } catch (err_2) {
      if (err_2) {
        console.clear();
        console.log(err_2);
      };
    };
  };


  rows_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      let y_0: any = document.querySelectorAll(
        <string>(
          String(".y0")
        ));
      let y_1: any = document.querySelectorAll(
        <string>(
          String(".y1")
        ));
      let y_2: any = document.querySelectorAll(
        <string>(
          String(".y2")
        ));
      let y_3: any = document.querySelectorAll(
        <string>(
          String(".y3")
        ));
      let y_4: any = document.querySelectorAll(
        <string>(
          String(".y4")
        ));
      let y_5: any = document.querySelectorAll(
        <string>(
          String(".y5")
        ));
      let y_6: any = document.querySelectorAll(
        <string>(
          String(".y6")
        ));
      let y_7: any = document.querySelectorAll(
        <string>(
          String(".y7")
        ));
      let y_8: any = document.querySelectorAll(
        <string>(
          String(".y8")
        ));
      [...y_0, ...y_3, ...y_6].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 0, 0)")
        );
      });
      [...y_1, ...y_4, ...y_7].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 244, 0)")
        );
      });
      [...y_2, ...y_5, ...y_8].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 0, 244)")
        );
      });
    } catch (err_3) {
      if (err_3) {
        console.clear();
        console.log(err_3);
      };
    };
  };


  cols_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      let x_0: any = document.querySelectorAll(
        <string>(
          String(".x0")
        ));
      let x_1: any = document.querySelectorAll(
        <string>(
          String(".x1")
        ));
      let x_2: any = document.querySelectorAll(
        <string>(
          String(".x2")
        ));
      let x_3: any = document.querySelectorAll(
        <string>(
          String(".x3")
        ));
      let x_4: any = document.querySelectorAll(
        <string>(
          String(".x4")
        ));
      let x_5: any = document.querySelectorAll(
        <string>(
          String(".x5")
        ));
      let x_6: any = document.querySelectorAll(
        <string>(
          String(".x6")
        ));
      let x_7: any = document.querySelectorAll(
        <string>(
          String(".x7")
        ));
      let x_8: any = document.querySelectorAll(
        <string>(
          String(".x8")
        ));
      [...x_0, ...x_3, ...x_6].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 0, 0)")
        );
      });
      [...x_1, ...x_4, ...x_7].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 244, 0)")
        );
      });
      [...x_2, ...x_5, ...x_8].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 0, 244)")
        );
      });
    } catch (err_4) {
      if (err_4) {
        console.clear();
        console.log(err_4);
      };
    };
  };


  null_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      let _tds_: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      [..._tds_].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 0, 0)")
        );
      });
    } catch (err_5) {
      if (err_5) {
        console.clear();
        console.log(err_5);
      };
    };
  };


  i_fT_tF_o(): void {
    <string>(
      String("use strict")
    );
    try {
      let ____0r: number[] = [];
      let _tds__: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      [..._tds__].forEach((cubicle) => {
        cubicle.innerHTML = <string>(
          String('0')
        );
        cubicle.style.color = <string>(
          String("rgb(122, 122, 122)")
        );
      });
      while (
        <number>(
          Number(____0r.length)
        )
        <
        <number>(
          Number(9)
        )
      ) {
        let strt_int_val = <number>(
          Number(Math.floor(Math.random()
            * <number>(
              Number(9)
            ))
            + <number>(
              Number(1)
            ))
        );
        if (
          <boolean>(
            Boolean(____0r.includes(
              <number>(
                Number(strt_int_val)
              ))))
          ===
          <boolean>(
            Boolean(false)
          )
        ) {
          ____0r.push(
            <number>(
              Number(strt_int_val)
            ))
        };
      };
      for (
        let indx__iter: number = <number>(
          Number(0)
        );
        indx__iter <= <number>(
          Number(8)
        );
        indx__iter += <number>(
          Number(1)
        )
      ) {
        _tds__[
          <number>(
            Number(indx__iter)
          )].innerHTML = ____0r[
          <number>(
            Number(indx__iter)
          )];
      };
      for (
        let indx__iter: number = <number>(
          Number(0)
        );
        indx__iter <= <number>(
          Number(8)
        );
        indx__iter += <number>(
          Number(1)
        )
      ) {
        _tds__[
          <number>(
            Number(indx__iter)
            + <number>(
              Number(12)
            )
          )].innerHTML = ____0r[
          <number>(
            Number(indx__iter)
          )];
      };
      _tds__[
        <number>(
          Number(9)
        )].innerHTML = <string>(
          String(____0r[
            <number>(
              Number(6)
            )]));
      _tds__[
        <number>(
          Number(10)
        )].innerHTML = <string>(
          String(____0r[
            <number>(
              Number(7)
            )]));
      _tds__[
        <number>(
          Number(11)
        )].innerHTML = <string>(
          String(____0r[
            <number>(
              Number(8)
            )]));
      _tds__[
        <number>(
          Number(18)
        )].innerHTML = <string>(
          String(____0r[
            <number>(
              Number(3)
            )]));
      _tds__[
        <number>(
          Number(19)
        )].innerHTML = <string>(
          String(____0r[
            <number>(
              Number(4)
            )]));
      _tds__[
        <number>(
          Number(20)
        )].innerHTML = <string>(
          String(____0r[
            <number>(
              Number(5)
            )]));
      _tds__[
        <number>(
          Number(21)
        )].innerHTML = <string>(
          String(____0r[
            <number>(
              Number(6)
            )]));
      _tds__[
        <number>(
          Number(22)
        )].innerHTML = <string>(
          String(____0r[
            <number>(
              Number(7)
            )]));
      _tds__[
        <number>(
          Number(23)
        )].innerHTML = <string>(
          String(____0r[
            <number>(
              Number(8)
            )]));
      _tds__[
        <number>(
          Number(24)
        )].innerHTML = <string>(
          String(____0r[
            <number>(
              Number(0)
            )]));
      _tds__[
        <number>(
          Number(25)
        )].innerHTML = <string>(
          String(____0r[
            <number>(
              Number(1)
            )]));
      _tds__[
        <number>(
          Number(26)
        )].innerHTML = <string>(
          String(____0r[
            <number>(
              Number(2)
            )]));
      for (
        let anot_indx_iter: number = <number>(
          Number(0)
        );
        anot_indx_iter <= <number>(
          Number(26)
        );
        anot_indx_iter += <number>(
          Number(1)
        )
      ) {
        _tds__[
          <number>(
            Number(anot_indx_iter)
          )].style.color = <string>(
            String("rgb(0, 0, 0)")
          );
      };
      {
        {
          for (
            let _10ts_repe: number = <number>(
              Number(1)
            );
            _10ts_repe <= <number>(
              Number(10)
            );
            _10ts_repe += <number>(
              Number(1)
            )
          ) {
            this.fT_tF();
          };
        };
        {
          let null_flag: boolean = <boolean>(
            Boolean(false)
          );
          let ______tds: any = document.querySelectorAll(
            <string>(
              String("td")
            ));
          for (
            let indx______iter: number = <number>(
              Number(0)
            );
            indx______iter <= <number>(
              Number(80)
            );
            indx______iter += <number>(
              Number(1)
            )
          ) {
            if (
              <string>(
                String(______tds[
                  <number>(
                    Number(indx______iter)
                  )].innerHTML))
              ===
              <string>(
                String('0')
              )
            ) {
              null_flag = <boolean>(
                Boolean(true)
              );
            };
          };
          {
            if (
              <boolean>(
                Boolean(null_flag)
              )
              ===
              <boolean>(
                Boolean(false)
              )
            ) {
              {
                let pseudo_random_indxs: string[] | any[] | number[] = [];
                let generate_bttn: any = document.querySelector(
                  <string>(
                    String("#generate-bttn")
                  ));
                let solve_bttn: any = document.querySelector(
                  <string>(
                    String("#solve-bttn")
                  ));
                let clls: any = document.querySelectorAll(
                  <string>(
                    String("td")
                  ));
                while (
                  <number>(
                    Number(pseudo_random_indxs.length)
                  )
                  <
                  <number>(
                    Number(40)
                  )
                ) {
                  let pos_prob_new_int_indx: number = <number>(
                    Number(Math.floor(Math.random()
                      * <number>(
                        Number(81)
                      )))
                  );
                  if (
                    <boolean>(
                      Boolean(pseudo_random_indxs.includes(
                        <number>(
                          Number(pos_prob_new_int_indx)
                        ))))
                    ===
                    <boolean>(
                      Boolean(false)
                    )
                  ) {
                    pseudo_random_indxs.push(
                      <number>(
                        Number(pos_prob_new_int_indx)
                      ));
                  };
                };
                for (
                  let ____iter_indx: number = <number>(
                    Number(0)
                  );
                  ____iter_indx <= <number>(
                    Number(39)
                  );
                  ____iter_indx += <number>(
                    Number(1)
                  )
                ) {
                  clls[
                    <number>(
                      Number(pseudo_random_indxs[
                        <number>(
                          Number(____iter_indx)
                        )])
                    )].style.color = <string>(
                      String("rgb(122, 122, 122)")
                    );
                };
                generate_bttn.style.visibility = <string>(
                  String("hidden")
                );
                solve_bttn.style.visibility = <string>(
                  String("visible")
                );
              };
            } else {
              {
                this.i_fT_tF_o();
              };
            };
          };
        };
      };
    } catch (err_6) {
      if (err_6) {
        console.clear();
        console.log(err_6);
      };
    };
  };


  fT_tF(): void {
    <string>(
      String("use strict")
    );
    try {
      let ___tds___: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      for (
        let _anot_anot_indx_iter: number = <number>(
          Number(27)
        );
        _anot_anot_indx_iter <= <number>(
          Number(80)
        );
        _anot_anot_indx_iter += <number>(
          Number(1)
        )
      ) {
        let sub_vals: string[] | any[] | number[] = [];
        let y___vals: string[] | any[] | number[] = [];
        let x___vals: string[] | any[] | number[] = [];
        let its__sub: any = document.querySelectorAll(
          <string>(
            <string>(
              String('.')
            )
            + String(___tds___[
              <number>(
                Number(_anot_anot_indx_iter)
              )].getAttribute(
                <string>(
                  String("class")
                ))).split(
                  <string>(
                    String(' ')
                  ))[
            <number>(
              Number(0)
            )]
          ));
        let its____y: any = document.querySelectorAll(
          <string>(
            <string>(
              String('.')
            )
            + String(___tds___[
              <number>(
                Number(_anot_anot_indx_iter)
              )].getAttribute(
                <string>(
                  String("class")
                ))).split(
                  <string>(
                    String(' ')
                  ))[
            <number>(
              Number(1)
            )]
          ));
        let its____x: any = document.querySelectorAll(
          <string>(
            <string>(
              String('.')
            )
            + String(___tds___[
              <number>(
                Number(_anot_anot_indx_iter)
              )].getAttribute(
                <string>(
                  String("class")
                ))).split(
                  <string>(
                    String(' ')
                  ))[
            <number>(
              Number(2)
            )]
          ));
        for (
          let _indx_iter____: number = <number>(
            Number(0)
          );
          _indx_iter____ <= <number>(
            Number(8)
          );
          _indx_iter____ += <number>(
            Number(1)
          )
        ) {
          sub_vals.push(
            <number>(
              Number(
                <string>(
                  String(its__sub[
                    <number>(
                      Number(_indx_iter____)
                    )].innerHTML)))));
          y___vals.push(
            <number>(
              Number(
                <string>(
                  String(its____y[
                    <number>(
                      Number(_indx_iter____)
                    )].innerHTML)))));
          x___vals.push(
            <number>(
              Number(
                <string>(
                  String(its____x[
                    <number>(
                      Number(_indx_iter____)
                    )].innerHTML)))));
        };
        {
          for (
            let pos_prob_new_int_val: number = <number>(
              Number(1)
            );
            pos_prob_new_int_val <= <number>(
              Number(9)
            );
            pos_prob_new_int_val += <number>(
              Number(1)
            )
          ) {
            if (
              (
                <boolean>(
                  Boolean(sub_vals.includes(
                    <number>(
                      Number(pos_prob_new_int_val)
                    ))))
                ===
                <boolean>(
                  Boolean(false)
                )
              )
              &&
              (
                <boolean>(
                  Boolean(y___vals.includes(
                    <number>(
                      Number(pos_prob_new_int_val)
                    ))))
                ===
                <boolean>(
                  Boolean(false)
                )
              )
              &&
              (
                <boolean>(
                  Boolean(x___vals.includes(
                    <number>(
                      Number(pos_prob_new_int_val)
                    ))))
                ===
                <boolean>(
                  Boolean(false)
                )
              )
            ) {
              ___tds___[
                <number>(
                  Number(_anot_anot_indx_iter)
                )].innerHTML = <string>(
                  String(
                    <number>(
                      Number(pos_prob_new_int_val)
                    )));
              ___tds___[
                <number>(
                  Number(_anot_anot_indx_iter)
                )].style.color = <string>(
                  String("rgb(0, 0, 0)")
                );
            };
          };
        };
        {
          if (
            <string>(
              String(___tds___[
                <number>(
                  Number(_anot_anot_indx_iter)
                )].innerHTML))
            ===
            <string>(
              String('0')
            )
          ) {
            break;
          };
        };
      };
    } catch (err_7) {
      if (err_7) {
        console.clear();
        console.log(err_7);
      };
    };
  };


  rerender_UI_state(): void {
    <string>(
      String("use strict")
    );
    try {
      {
        let generate___bttn: any = document.querySelector(
          <string>(
            String("#generate-bttn")
          ));
        let solve______bttn: any = document.querySelector(
          <string>(
            String("#solve-bttn")
          ));
        let cubicles_______: any = document.querySelectorAll(
          <string>(
            String("td")
          ));
        [...cubicles_______].forEach((___c) => {
          ___c.style.color = <string>(
            String("rgb(0, 0, 0)")
          );
        });
        generate___bttn.style.visibility = <string>(
          String("visible")
        );
        solve______bttn.style.visibility = <string>(
          String("hidden")
        );
      };
    } catch (err_8) {
      if (err_8) {
        console.clear();
        console.log(err_8);
      };
    };
  };

};
