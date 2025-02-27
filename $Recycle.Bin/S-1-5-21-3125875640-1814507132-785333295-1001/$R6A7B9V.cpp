#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    int sum=0;
    int temp=n;
    for(int i=1;i<=3;i++)
    {
        int digit=n%10;
        int sum = digit*i;
    }
}