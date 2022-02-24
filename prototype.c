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
    if(pregailv<=accuracy)return;//���ȿ���
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
    printf("ԭʯ:");
    scanf("%d",&yuanshi);
    int da=0,jichou=0;
    printf("�󱣵�1/С����0:");
    scanf("%d",&da);
    printf("���˼���:");
    scanf("%d",&jichou);
    printf("�Ƿ��21���ĵ�һ����(��1/��0):");
    scanf("%d",&ifchou1);
    printf("�Ƿ��42���ĵڶ�����(��1/��0):");
    scanf("%d",&ifchou2);
    printf("�Ƿ��63���ĵ�������(��1/��0):");
    scanf("%d",&ifchou3);
    printf("���ȿ���(��0.00001/�Ƽ�0.0000001/׼ȷ0):");
    scanf("%f",&accuracy);
    today(1,yuanshi,da,1,jichou);
    printf("�鵽��һ�����ӵĸ���:%f\n",cal1gailv);
    printf("�鵽�ڶ������ӵĸ���:%f\n",cal2gailv);
    printf("�鵽���������ӵĸ���:%f\n",cal3gailv);
}
