class Solution {
    public long solution(int price, int money, int count) {
        long answer = -1;
        
        long stackPrice = 0;
        for (int i=1; i <= count; i++) {
            stackPrice += price*i;
        }
    
        long gap = 0;
        if (stackPrice > money) {
            gap = stackPrice - money;
        }
        else {
            gap = 0;
        }
        
        answer = gap;
        return answer;
    }
}