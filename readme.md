# LibFix
Rozszerzenie do Firefox którego zadanie jest usunięcie nie chcianego zachowanie aplikacji, przy otwieraniu planu zajęć.

## Problem 
Librus w domyśle otwiera link do planu lekcji w nowym specjalnym oknie które jest nie wygodne w pracy. 

## Działanie
Skrypt zamienia odwołanie do funkcji js na standardowe odwołanie w znaczniku ```<a>```.

   - Vanila:
    ```<a href="javascript:otworz_w_nowym_oknie('/przegladaj_plan_lekcji','plan_u',0,0)">Plan lekcji</a>```
   - Rozszerzenie:
    ```<a href="/przegladaj_plan_lekcji">Plan lekcji</a>```