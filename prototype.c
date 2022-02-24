#include<stdio.h>
int yuanshi=0;
float gailv[90]={0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.006,0.066,0.126,0.186,0.246,0.306,0.366,0.426,0.486,0.546,0.606,0.666,0.726,0.786,0.846,0.906,0.966,1};
float cal1gailv=0;
float cal2gailv=0;
float cal3gailv=0;
int ifchou1=0;
int ifchou2=0;
int ifchou3=0;
float accuracy=0;

void today(int date,int ys,int d,float pregailv,int jichou);
void chou1(int ys,int d,float pregailv,int jichou,int date);
void chou2(int ys,int d,float pregailv,int jichou,int date);
void chou3(int ys,int d,float pregailv,int jichou,int date);

void today(int date,int ys,int d,float pregailv,int jichou){
    if(pregailv<=accuracy)return;//精度控制
    if(date==21&&ifchou1==1&&ys>=160){
        chou1(ys-160,d,pregailv,jichou,date);
    }
    else if(date==42&&ifchou2==1&&ys>=160){
        chou2(ys-160,d,pregailv,jichou,date);
    }
    else if(date==63&&ifchou3==1&&ys>=160){
        chou3(ys-160,d,pregailv,jichou,date);
    }
    else if(date==64){
        return;
    }
    else{
    today(date+1,ys+150,d,pregailv,jichou);
    }
}

void chou1(int ys,int d,float pregailv,int jichou,int date){
    if(d==1){
        cal1gailv=cal1gailv+(pregailv*gailv[jichou]);
        today(date+1,ys+150,0,pregailv*gailv[jichou],0);
        today(date,ys,1,pregailv*(1-gailv[jichou]),jichou+1);
    }
    else{
        cal1gailv=cal1gailv+(pregailv*gailv[jichou]*0.5);
        today(date+1,ys+150,0,pregailv*gailv[jichou]*0.5,0);
        today(date,ys,1,pregailv*gailv[jichou]*0.5,0);
        today(date,ys,0,pregailv*(1-gailv[jichou]),jichou+1);
    }
}

void chou2(int ys,int d,float pregailv,int jichou,int date){
    if(d==1){
        cal2gailv=cal2gailv+(pregailv*gailv[jichou]);
        today(date+1,ys+150,0,pregailv*gailv[jichou],0);
        today(date,ys,1,pregailv*(1-gailv[jichou]),jichou+1);
    }
    else{
        cal2gailv=cal2gailv+(pregailv*gailv[jichou]*0.5);
        today(date+1,ys+150,0,pregailv*gailv[jichou]*0.5,0);
        today(date,ys,1,pregailv*gailv[jichou]*0.5,0);
        today(date,ys,0,pregailv*(1-gailv[jichou]),jichou+1);
    }
}

void chou3(int ys,int d,float pregailv,int jichou,int date){
    if(d==1){
        cal3gailv=cal3gailv+(pregailv*gailv[jichou]);
        today(date+1,ys+150,0,pregailv*gailv[jichou],0);
        today(date,ys,1,pregailv*(1-gailv[jichou]),jichou+1);
    }
    else{
        cal3gailv=cal3gailv+(pregailv*gailv[jichou]*0.5);
        today(date+1,ys+150,0,pregailv*gailv[jichou]*0.5,0);
        today(date,ys,1,pregailv*gailv[jichou]*0.5,0);
        today(date,ys,0,pregailv*(1-gailv[jichou]),jichou+1);
    }
}

int main(){
    printf("原石:");
    scanf("%d",&yuanshi);
    int da=0,jichou=0;
    printf("大保底1/小保底0:");
    scanf("%d",&da);
    printf("垫了几抽:");
    scanf("%d",&jichou);
    printf("是否抽21天后的第一个池(是1/否0):");
    scanf("%d",&ifchou1);
    printf("是否抽42天后的第二个池(是1/否0):");
    scanf("%d",&ifchou2);
    printf("是否抽63天后的第三个池(是1/否0):");
    scanf("%d",&ifchou3);
    printf("精度控制(快0.00001/推荐0.0000001/准确0):");
    scanf("%f",&accuracy);
    today(1,yuanshi,da,1,jichou);
    printf("抽到第一个池子的概率:%f\n",cal1gailv);
    printf("抽到第二个池子的概率:%f\n",cal2gailv);
    printf("抽到第三个池子的概率:%f\n",cal3gailv);
}
