// 1.sum of each element
// 2.sum of even element
// 3.cube of each element
// 4.table of each element
// 5.minmum and maximum elemnt in array
#include<stdio.h>
int main(){
    int arr[] ={10,20,3,5,40,60};
    int n = sizeof(arr)/sizeof(arr[0]);
    int sum = 0;
    int sum_even = 0;
    int cube = 0;
    int min = arr[0];
    int max = arr[0]; 
    for(int i = 0; i < n; i++){
        sum = sum + arr[i];
        if(arr[i] % 2 == 0){
            sum_even = sum_even + arr[i];
            }
            cube = cube + arr[i]*arr[i]*arr[i];
            if(arr[i] < min){
                min = arr[i];
                }
                if(arr[i] > max){
                    max = arr[i];
                    }
                    }
                    printf("sum of each element is %d\n",sum);
                    printf("sum of even element is %d\n",sum_even);
                    printf("cube of each element is %d\n",cube);
                    printf("max value of the array %d\n",max);
                    printf("min value of the array %d\n",min);
                    {
                        
                         int table;
                         for(int i = 0; i < 10; i++){
                            table = arr[i]* i++;
                            printf("%d\t",table);
                            }
                            printf("\n");

                    }
}
