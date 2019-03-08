'''
Challenge Link: https://www.hackerrank.com/challenges/nested-list/problem
'''

if __name__ == '__main__':

    students = []
    scores = []
    secondLowest = []
    current = 0

    for i in range(int(input())):
        name = input()
        score = float(input())
        student = [name, score]
        students.append(student)
        scores.append(score)

    scores.sort()

    for i in range(len(scores)):
        if len(scores) == 1:
            secondLowestScore = scores[current]
        elif scores[current] < scores[current+1]:
            secondLowestScore = scores[current+1]
        else:
            current += 1
    
    for i in range(len(students)):
        if students[i][1] == secondLowestScore:
            secondLowest.append(students[i][0])
    
    secondLowest.sort()

    for i in range(len(secondLowest)):
        print(secondLowest[i])
        
